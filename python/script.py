import json


def write_to_json(filename, json_filename):
    # Open the text file and read the data
    with open(filename, "r") as f:
        data = f.read()

    # Split the data into lines
    lines = data.split("\n")

    # Initialize an empty list to hold the questions and answers
    qa_list = []

    # Iterate over the lines in groups of two (a question and an answer)
    for i in range(0, len(lines), 2):
        # Create a dictionary with the question and answer
        if i + 1 < len(lines):
            qa_dict = {"question": lines[i], "answer": lines[i + 1]}

            # Add the dictionary to the list
            qa_list.append(qa_dict)

    # Write the list to a JSON file
    with open(json_filename, "w") as f:
        json.dump(qa_list, f)


# Test the function
write_to_json("text.txt", "ceva.json")
