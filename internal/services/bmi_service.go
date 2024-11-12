package services

import (
	"fmt"
	"strconv"

	"bmi-calculator/internal/models"
)

type BMIService struct{}

func (s *BMIService) CalculateBMI(weightStr, heightStr string) (*models.BMIResult, error) {
	// Convert inputs
	weight, errWeight := strconv.ParseFloat(weightStr, 64)
	height, errHeight := strconv.ParseFloat(heightStr, 64)

	// Validate inputs
	if errWeight != nil || errHeight != nil {
		return nil, fmt.Errorf("invalid input: weight or height")
	}

	if weight <= 0 || height <= 0 {
		return nil, fmt.Errorf("weight and height must be positive")
	}

	// Create BMI Result
	result := &models.BMIResult{
		Weight: weight,
		Height: height,
	}

	// Calculate BMI
	result.CalculateBMI()

	return result, nil
}
