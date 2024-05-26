```mermaid
sequenceDiagram
    participant B as browser
    participant S as server

    Note right of B: The browser sends user input form data: note=IDDQD

    B->>S: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate S
    S-->>B: HTTP status code 302 (URL redirect)
    deactivate S

    B->>S: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate S
    S-->>B: HTML document
    deactivate S

    B->>S: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate S
    S-->>B: the CSS file
    deactivate S

    B->>S: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate S
    S-->>B: the JavaScript file
    deactivate S

    Note right of B: The browser starts executing the JavaScript code that fetches the JSON from the server

    B->>S: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate S
    S-->>B: [ ..., { "content": "IDDQD", "date": "2024-05-25T21:20:17.713Z" }, ... ]
    deactivate S

    Note right of B: The browser executes the callback function that renders the notes
```