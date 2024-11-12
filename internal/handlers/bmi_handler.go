package handlers

import (
	"html/template"
	"net/http"

	"bmi-calculator/internal/services"
)

func BMIHandler(w http.ResponseWriter, r *http.Request) {
	// Parse the template
	tmpl, err := template.ParseFiles("web/templates/bmi.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Handle POST requests
	if r.Method == http.MethodPost {
		// Parse form data
		if err := r.ParseForm(); err != nil {
			http.Error(w, "Error parsing form", http.StatusBadRequest)
			return
		}

		// Get form values
		weight := r.FormValue("weight")
		height := r.FormValue("height")

		// Create BMI Service
		bmiService := &services.BMIService{}

		// Calculate BMI
		result, err := bmiService.CalculateBMI(weight, height)
		if err != nil {
			// If there's an error, render the template with no result
			tmpl.Execute(w, nil)
			return
		}

		// Render template with result
		tmpl.Execute(w, result)
		return
	}

	// For GET request, render empty form
	tmpl.Execute(w, nil)
}
