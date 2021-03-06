# React Native Mobile Flashcards App

## Views

- [x] Deck List (show a list of the Deck components)
  - title of deck
  - \# of cards in the deck
- [x] Deck (show the deck information)
  - title
  - \# of cards in the deck
  - option to add a new card
  - option to start a quiz with the deck
- [x] Quiz (display a card, with 2 answer choices)
  - question on the card
  - option to view answer (flip card)
  - option to mark "correct"
  - option to mark "incorrect"
  - \# of cards left in the quiz
  - when \# of cards left = 0, show results (percentage)
- [x] New Deck (add a new deck)
  - text input for new deck name
  - submit action
- [x] New Question
  - text input for question
  - text input for answer
  - submit action

## Data Management

### Async Storage

- `getDecks()`: return all of the decks (as full object)
- `getDeck(id)`: get id's deck object back
- `saveDeckTitle(title)`: add new title to the list of decks
- `addCardToDeck(title, card)`: add new card to the calling deck

### Redux

- decks
- actions:
  - get decks

#### Shape of State:

```
{
  DeckTitle: {
    title: 'Deck Title',
    questions: [
      {
        question: 'Question 1',
        answer: 'Answer 1'
      },
      {
        question: 'Question 2',
        answer: 'Answer 2'
      },
    ]
  },
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
```
