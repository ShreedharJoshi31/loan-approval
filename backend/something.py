import pandas as pd

# Assuming your dataset is in a CSV file named 'dataset.csv'
dataset_path = 'loan_approval_dataset.csv'

# Load the dataset into a pandas DataFrame
df = pd.read_csv(dataset_path)

# Iterate over each column in the DataFrame
for column_name in df.columns:
    column = df[column_name]
    
    # Check if the column contains numeric values
    if pd.api.types.is_numeric_dtype(column):
        # For numeric columns: Get minimum, maximum, mean, standard deviation, and number of unique values
        min_value = column.min()
        max_value = column.max()
        mean_value = column.mean()
        std_deviation = column.std()
        num_unique = column.nunique()
        
        # Output the numeric statistics
        print(f"Attribute: {column_name}")
        print(f"Minimum: {min_value}")
        print(f"Maximum: {max_value}")
        print(f"Mean: {mean_value}")
        print(f"Standard Deviation: {std_deviation}")
        print(f"Number of Unique Values: {num_unique}")
        print("\n")
    else:
        # For categorical columns: Get unique values, count, and number of unique values
        unique_values = column.unique()
        count = len(column)
        num_unique = column.nunique()
        
        # Output the categorical statistics
        print(f"Attribute: {column_name}")
        print(f"Unique Values: {unique_values}")
        print(f"Count: {count}")
        print(f"Number of Unique Values: {num_unique}")
        print("\n")
