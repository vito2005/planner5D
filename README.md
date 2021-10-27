# Test exercise for Planner5D

## Description

Project has two pages:
- a list of projects in format: [hash], [title]
- project preview with statistics and preview of a first floor with rooms.

## Running locally:

```bash
$ npm install
$ npm run start # serve pages at localhost:5000
```

## Build production files of pages:
```bash
$ npm install
$ npm run build
# look up files from docs folder
```

## Task: Create a small JavaScript / HTML / CSS page that loads list projects from our gallery page and previews them.

1. Create list of projects, that should:

    1.1. Use pure CSS

    1.2. Manually select list of projects from https://planner5d.com/gallery/floorplans

    1.3. List selected projects, in format: [hash], [title]

    1.4. Pressing on list item should open project preview page

2. Create a project preview page, that should:

    2.1. Use SCSS

    2.2. Download (using AJAX) project JSON (it is part of your task to find out how to load project JSON)

    2.3. Show project title

    2.4. Show project preview (using Canvas 2D) on which you should draw project room polygons from first floor

    2.5. Show project statistics:

    2.5.1. Amount of floors in project

    2.5.2. Amount of rooms in project

    2.5.3. Amount of other items in project

