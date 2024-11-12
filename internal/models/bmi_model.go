package models

type BMIResult struct {
	Weight      float64
	Height      float64
	BMI         float64
	Category    string
	ResultClass string
}

func (b *BMIResult) CalculateBMI() {
	// Calculate BMI
	b.BMI = b.Weight / ((b.Height / 100) * (b.Height / 100))

	// Determine Category
	switch {
	case b.BMI < 18.5:
		b.Category = "Kekurangan Berat Badan"
		b.ResultClass = "alert-warning"
	case b.BMI >= 18.5 && b.BMI < 24.9:
		b.Category = "Berat Badan Normal"
		b.ResultClass = "alert-success"
	case b.BMI >= 25 && b.BMI < 29.9:
		b.Category = "Kelebihan Berat Badan"
		b.ResultClass = "alert-warning"
	default:
		b.Category = "Obesitas"
		b.ResultClass = "alert-danger"
	}
}
