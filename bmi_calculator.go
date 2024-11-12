package main

import (
	"html/template"
	"log"
	"math"
	"net/http"
	"strconv"
)

// BMI struct to hold calculation results
type BMIResult struct {
	BMI         float64
	Category    string
	ResultClass string
}

func main() {
	// Serve static files (CSS, JS)
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

	// Route for BMI calculator
	http.HandleFunc("/", bmiCalculatorHandler)

	// Start the server
	log.Println("Server starting on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func bmiCalculatorHandler(w http.ResponseWriter, r *http.Request) {
	// Parse the template
	tmpl, err := template.ParseFiles("templates/bmi.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Check if it's a POST request (form submission)
	if r.Method == http.MethodPost {
		// Parse form data
		if err := r.ParseForm(); err != nil {
			http.Error(w, "Error parsing form", http.StatusBadRequest)
			return
		}

		// Get weight and height from form
		weightStr := r.FormValue("weight")
		heightStr := r.FormValue("height")

		// Convert to float
		weight, errWeight := strconv.ParseFloat(weightStr, 64)
		height, errHeight := strconv.ParseFloat(heightStr, 64)

		// Validate inputs
		if errWeight != nil || errHeight != nil || weight <= 0 || height <= 0 {
			tmpl.Execute(w, nil)
			return
		}

		// Calculate BMI (height in cm converted to meters)
		bmi := weight / math.Pow(height/100, 2)
		result := calculateBMICategory(bmi)

		// Render template with result
		tmpl.Execute(w, result)
		return
	}

	// For GET request, render empty form
	tmpl.Execute(w, nil)
}

func calculateBMICategory(bmi float64) BMIResult {
	result := BMIResult{
		BMI: math.Round(bmi*100) / 100, // Round to 2 decimal places
	}

	switch {
	case bmi < 18.5:
		result.Category = "Kekurangan Berat Badan"
		result.ResultClass = "alert-warning"
	case bmi >= 18.5 && bmi < 24.9:
		result.Category = "Berat Badan Normal"
		result.ResultClass = "alert-success"
	case bmi >= 25 && bmi < 29.9:
		result.Category = "Kelebihan Berat Badan"
		result.ResultClass = "alert-warning"
	default:
		result.Category = "Obesitas"
		result.ResultClass = "alert-danger"
	}

	return result
}
