import json
import nlp

def process_data(filename):
    # Load the data from the JSON file
    with open(filename, 'r') as f:
        data = json.load(f)

    # Create a list to store the processed data
    processed_data = []

    # Iterate over the data
    for item in data:
        # Access the question and answer
        question = item['question']
        answer = item['answer']

        # Process the question using NLP functions
        processed_question = nlp.processText(question)

        # Add the processed question and answer to the list
        processed_data.append({
            'keywords': processed_question,
            'answer': answer
        })

    print(processed_data)
    # Write the processed data to the output JSON file
    with open("data.json", 'w') as f:
        json.dump(processed_data, f)

        

# Test the function
process_data('ceva.json')