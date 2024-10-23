# Marvel Characters Application

A React application that displays Marvel characters and their details using the Marvel API.

## Components

### CharacterList

Located in `src/components/CharacterList.js`, this component displays a grid of Marvel characters.

**Features:**
- Fetches characters from Marvel API
- Displays character thumbnails in a responsive 4-column grid
- Shows character names below their images
- Clickable character cards that trigger character selection

**Props:**
- `onCharacterSelect`: Callback function that handles character selection

### CharacterDetail

Located in `src/components/CharacterDetail.js`, this component shows detailed information about a selected character.

**Features:**
- Fetches specific character details using character ID
- Displays character name and description
- Lists comics featuring the character

**Props:**
- `characterId`: ID of the selected Marvel character

## API Integration

The application uses the Marvel API with the following endpoints:
- Character list: `https://gateway.marvel.com/v1/public/characters`
- Character details: `https://gateway.marvel.com/v1/public/characters/{characterId}`

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
