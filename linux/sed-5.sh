sed -E 's/([0-9]{4}) ([0-9]{4}) ([0-9]{4}) ([0-9]{4})/\4 \3 \2 \1 /g'

# not passing test cases
# sed -E 's/(.*{4}) (.*{4}) (.*{4}) (.*{4})/\4 \3 \2 \1 /g'