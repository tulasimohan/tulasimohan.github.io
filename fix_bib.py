
import bibtexparser
import os

input_file = "/Users/tulasi/Public/tulasimohan.github.io/assets/bibliography/My Library.bib"
output_file = "/Users/tulasi/Public/tulasimohan.github.io/assets/bibliography/My Library_fixed.bib"

try:
    with open(input_file, 'r', encoding='utf-8') as bibtex_file:
        bib_database = bibtexparser.load(bibtex_file)

    with open(output_file, 'w', encoding='utf-8') as bibtex_file:
        bibtexparser.dump(bib_database, bibtex_file)

    print(f"Successfully parsed and rewrote {input_file} to {output_file}")

    # Replace the original file with the fixed one
    os.replace(output_file, input_file)
    print(f"Replaced original file with fixed version: {input_file}")

except Exception as e:
    print(f"An error occurred: {e}")
