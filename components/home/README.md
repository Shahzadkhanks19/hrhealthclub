# Homepage components

The homepage is intentionally split into section-level components. Keep `home-page.tsx` as composition only and place section-specific content/layout in the matching `*-section.tsx` file. Shared site-wide UI belongs outside this folder.

## Project rule

Use the same pattern for every future page: route files compose page-level components, page-level components compose section components, and shared UI is extracted instead of creating monolithic files.
