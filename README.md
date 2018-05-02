## image-and-link-webpart
### A web part built to display a simple panel with a title, image, and link to a supporting page or site

The image-and-link-webpart webpart is a simple web part to display an "announcement panel" consisting of a short piece of text, a supporting image, and a link. It is built to be configured either by a user-designer. The content is contained in a list and is built to be updated by a user-contributor, with no direct interaction with the web part's properties required. Multiple instances of this web part may be placed on a given page.

#### Roadmap
1. Stage 1 - First iteration
    * Define Web Part Properties
    * Build Web Part UI
    * Build Menu UI
2. Stage 2 - Add support for configuring lists
    * "Supporting list" library - for future reuse
    * Unit tests for everything in this library, plz and tnx
3. Stage 3 - Integrate configure lists library
    * First release after this pointEE

#### Developer Documentation And Notes
* This web part is supported by one of two lists based on the inital user configuration
    * If the designer selects to update the web part content directly from the configuration panel, no list is created, and the web part's configuration state is maintained directly in the web part's instance.
    * If the designer selects to update the web part content through a list shown in the site contents (to allow contributors to update the list), a visible site list is created. It is named <code>cu-AnnouncementsPanel</code>
    * Only one of these lists will be created per site. The web part will first check for an existing list and, if it exists, will attempt to use that list instead.
    * The supporting list will contain a choice column for the instance of the web part being supported.
        * This column will be updated by a new instance of the web part upon its creation.
        * The supporting list will enforce unique values for the instance of web part choice column in order to ensure that there are no collisions involving multiple entries for a supported instance of the web part.
        * Upon deletion of an instance of the web part, the choice column will be modified to remove the instance of the web part from its list of choices, any any list items with the subject web part will be removed.

#### Designer/User Documentation And Notes
* The configuration positive path is:
    1. The designer adds an instance of the web part to the page
        * When the web part's configuration panel is opened, the web part asyhnchronously checks for the existence of a supporting list and, if so, consumes that list to validate a unique name
    2. The designer creates a unique name and description for the instance of the web part
        * The name is validated against any existing list
    3. The designer checks yes/no to the option "allow content contributors to update the content of this web part"
    4. The designer adds the values for the title, image URL, and link URL.
    5. The designer might be allowed to enter size parameters... but I'm not sure yet :)