# Web@Berkeley Project

## Stack Overview
- GatsbyJS - Speed, Speed, and Speed
- SEO with Helmet - Make the marketing team happy
- Smart Image rendering with `image-sharp` (saves data and initial load times are way lower)
- JSON for Data - As per the specs
- React Styled Components - Styled components are love and life
- Typescript - Types make everything easier
- Mobile Certified! - Comes with a plugin-manifest
- Google Fonts - Nothing like tons of easily accessible free fonts

### Things I didn't include
- Making a top level component for the title, upvotes/downvotes, and content for both pages that can switch the layout around - I find to be less clean as a project grows
- Testing - Honestly way out of scope of this project and too lazy
- Any CI/CD Pipeline - Too lazy
- Updating the icon for web and mobile - Also too lazy

### Why not normal React, Angular or Vue?

Although those are all great frameworks, GatsbyJS generates static websites, which are far faster than any of the solutions mentioned above. That being said, for a real social media platform where I wasn't pulling in data like this, Next.JS or some other SSR React framework would be better. 

## Overview of the Code Base

*Note all these are inside the `src` folder**

`utils` - Various shared utility functions

`templates` - Page templates (for the post)

`styles` - Shared styles

`pages` - Index page

`models` - Data models for each post

`images` - Images

`data` - The JSON data

`components` - Broken up components
