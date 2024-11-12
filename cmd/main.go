package main

import (
	"log"
	"net/http"

	"bmi-calculator/internal/handlers"
)

func main() {
	// Setup static file serving
	fs := http.FileServer(http.Dir("./web/static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	// Routes
	http.HandleFunc("/", handlers.BMIHandler)

	// Server configuration
	port := ":8080"
	log.Printf("Server starting on port %s", port)

	// Start server
	err := http.ListenAndServe(port, nil)
	if err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}
