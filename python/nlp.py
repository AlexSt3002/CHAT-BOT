import spacy

# Load English tokenizer, tagger, parser, NER, and word vectors
# spacy.prefer_gpu() - GPU
nlp = spacy.load("en_core_web_sm")

# Process a text string


def processText(text):
    doc = nlp(text)
    keywordVector = []

    # Accessing tokens in the processed text
    for token in doc:
        if token.pos_ == "NOUN" or token.pos_ == "PROPN" or token.pos_ == "VERB":
            keywordVector.append(token.lemma_)

    return keywordVector if len(keywordVector) > 1 else ["No keywords found"]
