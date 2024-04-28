from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the saved Random Forest model
with open('random_forest_classifier.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/predict', methods=['POST'])
def predict():
    # Get the data from the POST request
    data = request.get_json(force=True)
    
    # Check if all required keys are present in the JSON object
    required_keys = ['no_of_dependents', 'education', 'self_employed', 'income_annum', 
                     'loan_amount', 'loan_term', 'cibil_score', 'residential_assets_value', 
                     'commercial_assets_value', 'luxury_assets_value', 'bank_asset_value']
    
    for key in required_keys:
        if key not in data:
            return jsonify({'error': f'Missing key: {key}'})

    # Convert data into a numpy array
    predict_data = np.array([
        data['no_of_dependents'],
        data['education'],
        data['self_employed'],
        data['income_annum'],
        data['loan_amount'],
        data['loan_term'],
        data['cibil_score'],
        data['residential_assets_value'],
        data['commercial_assets_value'],
        data['luxury_assets_value'],
        data['bank_asset_value']
    ]).reshape(1, -1)

    # Make prediction using the loaded model
    prediction = model.predict(predict_data)
    # Return the prediction as JSON
    return jsonify(prediction.tolist())

if __name__ == '__main__':
    app.run(debug=True)
