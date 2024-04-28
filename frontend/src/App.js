import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./App.css";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    no_of_dependents: "",
    education: "",
    self_employed: "",
    income_annum: "",
    loan_amount: "",
    loan_term: "",
    cibil_score: "",
    residential_assets_value: "",
    commercial_assets_value: "",
    luxury_assets_value: "",
    bank_asset_value: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        formData
      );
      setResult(response.data);
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Loan Application Form</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-4">
          <Label for="no_of_dependents" className="mb-2">
            Number of Dependents
          </Label>
          <Input
            type="number"
            name="no_of_dependents"
            id="no_of_dependents"
            placeholder="Enter number of dependents"
            value={formData.no_of_dependents}
            onChange={handleChange}
            bsSize="lg"
          />
        </FormGroup>
        <FormGroup className="mb-4">
          <Label for="education" className="mb-2">
            Education
          </Label>
          <Input
            type="select"
            name="education"
            id="education"
            value={formData.education}
            onChange={handleChange}
            bsSize="lg"
          >
            <option value="">Select</option>
            <option value="0">Graduate</option>
            <option value="1"> Not Graduate</option>
          </Input>
        </FormGroup>
        <FormGroup className="mb-4">
          <Label for="self_employed" className="mb-2">
            Self Employed
          </Label>
          <Input
            type="select"
            name="self_employed"
            id="self_employed"
            value={formData.self_employed}
            onChange={handleChange}
            bsSize="lg"
          >
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </Input>
        </FormGroup>
        <FormGroup className="mb-4">
          <Label for="income_annum" className="mb-2">
            Annual Income
          </Label>
          <Input
            type="number"
            name="income_annum"
            id="income_annum"
            placeholder="Enter annual income"
            value={formData.income_annum}
            onChange={handleChange}
            bsSize="lg"
          />
        </FormGroup>
        <FormGroup className="mb-4">
          <Label for="loan_amount" className="mb-2">
            Loan Amount
          </Label>
          <Input
            type="number"
            name="loan_amount"
            id="loan_amount"
            placeholder="Enter loan amount"
            value={formData.loan_amount}
            onChange={handleChange}
            bsSize="lg"
          />
        </FormGroup>
        <FormGroup className="mb-4">
          <Label for="loan_term" className="mb-2">
            Loan Term (in months)
          </Label>
          <Input
            type="number"
            name="loan_term"
            id="loan_term"
            placeholder="Enter loan term in months"
            value={formData.loan_term}
            onChange={handleChange}
            bsSize="lg"
          />
        </FormGroup>
        <FormGroup className="mb-4">
          <Label for="cibil_score" className="mb-2">
            CIBIL Score
          </Label>
          <Input
            type="number"
            name="cibil_score"
            id="cibil_score"
            placeholder="Enter CIBIL score"
            value={formData.cibil_score}
            onChange={handleChange}
            bsSize="lg"
          />
        </FormGroup>
        <FormGroup className="mb-4">
          <Label for="residential_assets_value" className="mb-2">
            Residential Assets Value
          </Label>
          <Input
            type="number"
            name="residential_assets_value"
            id="residential_assets_value"
            placeholder="Enter value of residential assets"
            value={formData.residential_assets_value}
            onChange={handleChange}
            bsSize="lg"
          />
        </FormGroup>
        <FormGroup className="mb-4">
          <Label for="commercial_assets_value" className="mb-2">
            Commercial Assets Value
          </Label>
          <Input
            type="number"
            name="commercial_assets_value"
            id="commercial_assets_value"
            placeholder="Enter value of commercial assets"
            value={formData.commercial_assets_value}
            onChange={handleChange}
            bsSize="lg"
          />
        </FormGroup>
        <FormGroup className="mb-4">
          <Label for="luxury_assets_value" className="mb-2">
            Luxury Assets Value
          </Label>
          <Input
            type="number"
            name="luxury_assets_value"
            id="luxury_assets_value"
            placeholder="Enter value of luxury assets"
            value={formData.luxury_assets_value}
            onChange={handleChange}
            bsSize="lg"
          />
        </FormGroup>
        <FormGroup className="mb-4">
          <Label for="bank_asset_value" className="mb-2">
            Bank Asset Value
          </Label>
          <Input
            type="number"
            name="bank_asset_value"
            id="bank_asset_value"
            placeholder="Enter value of bank assets"
            value={formData.bank_asset_value}
            onChange={handleChange}
            bsSize="lg"
          />
        </FormGroup>
        <Button color="primary" className="mt-6" size="xl">
          Submit
        </Button>
      </Form>
      {result && (
        <div className="mt-4">
          <h2 className="text-center">Loan Status</h2>
          <p className="text-center">{result == 0 ? "Approved" : "Rejected"}</p>
        </div>
      )}
    </Container>
  );
}

export default App;
