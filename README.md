# Employee List

A React employee directory that renders staff records as responsive cards and
applies bulk actions — promotion and salary hike — across every record at once.

Built by [Isha Nashir Shaikh](https://github.com/isha-shaikh).

## Features

- Employee cards showing name, designation, salary (formatted as INR) and city
- **Promote All** — prefixes every designation with "Senior" and raises salary by 30%
- **Hike All** — raises every salary by 20%
- Responsive three-column grid via React Bootstrap

## Stack

React 18 · React Bootstrap · Bootstrap 5 · Create React App

## Running locally

```bash
git clone https://github.com/isha-shaikh/Employee-List.git
cd Employee-List
npm install
npm start          # http://localhost:3000
```

```bash
npm run build      # production build to build/
npm test
```

## How it works

A single `EmployeeList` component holds the roster in `useState`. Both actions are
pure transformations — they `map` over the current array, return new objects, and
replace state, so React re-renders the whole grid.

```
src/
├── App.js
└── Components/
    ├── Employee.jsx         roster state, promote/hike handlers, card grid
    └── EmployeeList.css     card styling
```

## Known limitations

Being straightforward about the current scope:

- **This is not full CRUD.** There is no add, edit, or delete — only the two bulk
  update actions. Individual records can't be modified.
- **Data is hardcoded** in component state and **not persisted.** Any promotion or
  hike is lost on refresh; there's no backend or database.
- **Duplicate `id`** — two records ("Aqib" and "sana") both use `id: 8`, which
  triggers React's "two children with the same key" warning and can cause
  incorrect reconciliation.
- **"Promote All" also overwrites `city`** to `"puna"` for every employee, which
  looks unintentional given promotion shouldn't relocate staff.
- **Data inconsistencies** — one record has an empty `city`, and one salary is
  `460000` where every other value is five digits.
- **Salary has no upper bound.** Repeated hikes compound indefinitely with no
  validation or rounding.

## Possible next steps

Add/edit/delete per record, move the roster to a backend with persistence, fix the
duplicate key, and separate the "transfer city" concern out of the promote action.
