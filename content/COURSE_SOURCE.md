# Course structure source: Bachelor of Theology (2021–22)

The **Bachelor-of-Theology-Course-Content-2021-22.pdf** in the project root is the official source for:

- **Years** and **credit** values  
- **Module/unit names** and codes  
- **Lesson/week** breakdown per module  

This app’s BTh structure is based on a typical 3-year BTh curriculum. To align it with your PDF:

1. Open the PDF and note the exact **module titles**, **credits**, and **year/level** for each unit.
2. Update `content/bachelorTheologyModules.js` so each module’s `id`, `title`, `credits`, and `year` match the PDF.
3. Add or remove lessons so they match the PDF’s weekly or topic breakdown.
4. Optionally add a short `content/PDF_MAPPING.md` listing PDF page/section → app module id for easy reference.

If you can export the PDF table of contents or module list as text, paste it here or into a `content/pdf-toc.txt` file so the structure can be matched exactly.
