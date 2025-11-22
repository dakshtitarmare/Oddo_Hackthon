from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
# Enable CORS for development (allowing JavaScript from port X to talk to Flask on port 5000)
CORS(app) 

# --- SIMULATED DATA STORE ---
# In a real app, this would come from PostgreSQL
USERS = {"manager": "password123"}
DASHBOARD_DATA = {
    "kpis": {
        "total_products": 1500,
        "low_stock": 55,
        "pending_receipts": 15,
        "pending_deliveries": 10,
        "internal_transfers": 7,
    },
    "recent_operations": [
        {"type": "Receipt", "reference": "RCV-0046", "status": "Waiting", "date": "2025-11-23", "location": "Main Warehouse"},
        {"type": "Delivery", "reference": "DO-0123", "status": "Ready", "date": "2025-11-23", "location": "Shipping Bay"},
        {"type": "Transfer", "reference": "TRF-0016", "status": "Done", "date": "2025-11-22", "location": "Rack A -> B"},
        {"type": "Receipt", "reference": "RCV-0045", "status": "Done", "date": "2025-11-21", "location": "Main Warehouse"},
    ]
}

# --- UTILITY FUNCTION ---
def require_auth(func):
    """Decorator to simulate authentication check."""
    def wrapper(*args, **kwargs):
        auth_header = request.headers.get('Authorization')
        if not auth_header or not auth_header.startswith('Bearer '):
            return jsonify({"error": "Unauthorized"}), 401
        
        # Simple token validation (In production, validate JWT)
        token = auth_header.split(' ')[1]
        if token != "SIMULATED_TOKEN": 
            return jsonify({"error": "Invalid token"}), 401
        
        return func(*args, **kwargs)
    wrapper.__name__ = func.__name__ # Needed for Flask decorators
    return wrapper

# --- API ENDPOINTS ---

@app.route('/api/login', methods=['POST'])
def login():
    """Handles user login and issues a simulated token."""
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if USERS.get(username) == password:
        # Success: Return a simulated JWT token
        return jsonify({"message": "Login successful", "token": "SIMULATED_TOKEN"}), 200
    
    # Failure
    return jsonify({"message": "Invalid credentials"}), 401

@app.route('/api/dashboard', methods=['GET'])
@require_auth
def get_dashboard_data():
    """Returns the simulated dashboard data."""
    return jsonify(DASHBOARD_DATA), 200

# --- RUNNER ---

if __name__ == '__main__':
    # To run this, install Flask: pip install Flask
    # Then run: python app.py
    # It will run on http://127.0.0.1:5000/
    app.run(debug=True)