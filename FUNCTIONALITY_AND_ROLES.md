# ACS Functional Roles and Responsibilities

## Purpose

ACS is a role-based application for creating, supplying, reviewing, and completing insurance-related work folders. A folder groups policy or questionnaire documents, supporting papers, speaker information, validation decisions, missing-document requests, and the complete processing history.

The application has four operational roles:

| Role | Primary responsibility |
| --- | --- |
| Administrator | Governs users, roles, reference data, application settings, and the complete folder portfolio. |
| ACS Manager | Processes assigned folders, reviews documentation, maintains speakers and papers, and advances processing status. |
| Insurer | Creates and manages insurer-side folders and supplies the required policy documentation. |
| Broker | Creates and manages broker-side folders and supplies questionnaire and supporting documentation. |

All authenticated users can manage their own account and sign out.

## Shared Functionality

### Account access and recovery

- Users can sign in with their account credentials.
- Users can register an account by selecting an available role.
- Users can sign out and end the current session.
- Users can start password recovery, receive a one-time password, resend it when necessary, verify it, and set a new password.

### My Account

Every signed-in user can:

- View and update personal profile information.
- Change the account password.
- View the theme assigned to the account or role.

Administrators can additionally maintain theme settings. Theme settings include the logo, logo dimensions, side-panel colour, main-panel colour, and primary-button colour.

### Folder information and documents

A folder can contain the following business information:

- Folder or policy reference.
- Contract number.
- Policyholder name.
- Associated broker.
- Estimated start date and completion date.
- Estimated site cost.
- Folder status and site status.
- Required and optional documents, papers, speakers, and document history.

Users can upload supported office-document and PDF formats. The application enforces a maximum file size of 50 MB per file.

### Folder lists and dashboards

Folder lists support the following common activities, according to the user's role:

- View paginated records.
- Search records.
- Sort records.
- Filter by processing status and, where available, site status.
- Switch between work-status views such as **To Process**, **To Complete**, **Incomplete**, **Verified**, **To Verify**, and related workflow states.
- Select which information columns are displayed.
- Open a detailed folder view.
- Delete a folder when the role has the folder-deletion permission.

Dashboards provide operational totals and document statistics. Statistics can be filtered by a predefined time period or a selected date.

### Folder processing controls

Depending on the user's role and folder state, the application supports:

- Viewing folder information, documents, papers, speakers, missing documents, and history.
- Adding files to an existing document requirement.
- Replacing or removing files.
- Adding a missing-document request.
- Recording an invalid-document reason.
- Validating a document and updating its status.
- Marking individual or all history entries as read.
- Updating folder information.

Every meaningful folder action is available for review through the folder history.

## Role Responsibilities

### Administrator

The Administrator is responsible for configuration, access administration, and overall operational oversight.

#### Dashboard and folder oversight

- View the administrative dashboard and the overall folder portfolio.
- Review folders by workflow and site status.
- Search, sort, filter, and open any listed folder.
- Review folder details, documents, speakers, papers, missing documents, validation information, and history.
- Delete folders when the applicable deletion permission is enabled.

#### Role management

- View available roles and their status.
- Create, edit, activate, deactivate, and remove roles.
- View available permissions and assign them to roles.
- Enable or disable the folder-deletion capability for each role.
- Maintain a visual theme for each role, including the role logo, logo dimensions, panel colours, and button colour.

#### User management

- View all users.
- Search, sort, and filter user records.
- Create user accounts and assign a role.
- Edit user details.
- Activate or deactivate users.
- Remove user accounts.
- View available insurers and available user-role assignments when creating or maintaining records.

#### Reference-data management

- Manage document types used in folders.
- Create, edit, activate, deactivate, and remove document types.
- Manage speaker records.
- Create, edit, activate, deactivate, and remove speakers.
- Maintain application settings such as the application name, contact email, telephone number, address, and insurer-email frequency.

#### Insurer email frequency

The Administrator can set the frequency for insurer notifications to daily, weekly, or monthly. The selected frequency controls the scheduled insurer email process.

### ACS Manager

The ACS Manager is responsible for active operational processing rather than system administration.

#### Work queue

- View a dedicated **To Process** dashboard that shows folders requiring action.
- Search, sort, filter, paginate, and open work-queue records.
- Switch between workflow-status views.
- View the total number of folders currently requiring processing.

#### Folder review and completion

- View all assigned or available processing folders.
- Review folder information, policy or questionnaire documents, papers, speakers, missing-document items, and history.
- Update folder information and site status.
- Review, validate, invalidate, replace, or remove document files as permitted by the workflow.
- Record the reason when a document is invalid or unsuitable.
- Add and manage missing-document requirements.
- Read and clear document-history notifications.

#### Speaker and paper administration within a folder

- View speakers attached to a folder.
- Add a speaker to a folder.
- View and update speaker information.
- Maintain the document type associated with a speaker document.
- Remove a speaker or remove a speaker document when it is no longer applicable.
- View the folder's papers and associated supporting documents.

### Insurer

The Insurer supplies insurance-side documentation and monitors insurer-owned folders.

#### Dashboard and folders

- View an insurer dashboard with folder counts and document statistics.
- Search, sort, filter, paginate, and open insurer folders.
- Review statuses, required documents, missing documents, and folder history.
- Delete folders when the insurer role has been granted the folder-deletion capability.

#### Folder creation and document supply

- Create a new folder.
- Provide folder information such as reference, contract details, policyholder, estimated dates, and estimated cost.
- Select the related broker where required.
- Upload the initial policy document.
- Add optional documents from the configured document-type list.
- Add files to existing document requirements and replace files when corrections are needed.

#### Ongoing collaboration

- Respond to missing-document requirements.
- Review validation results and invalid-document messages.
- Follow the folder's processing and site status through the dashboard, folder detail, and history.
- Receive insurer notifications according to the frequency set by the Administrator.

### Broker

The Broker creates and manages broker-side submissions and collaborates with the insurer and ACS processing team.

#### Dashboard and folders

- View a broker dashboard with the broker's folder counts and document statistics.
- Search, sort, filter, paginate, and open broker folders.
- Review workflow status, missing documents, validation outcomes, and history.
- Delete folders when the broker role has been granted the folder-deletion capability.

#### Folder creation and document supply

- Create a new folder for the broker's own account.
- Enter folder, contract, policyholder, schedule, and cost information.
- Upload the initial questionnaire document.
- Add optional supporting documents from the configured document-type list.
- Add, replace, and remove document files where the workflow permits it.

#### Ongoing collaboration

- Respond to requests for missing documents.
- Review invalid-document reasons and validation decisions.
- Track the folder as it moves through processing and completion.

## Folder Lifecycle

The intended operational sequence is:

1. An Insurer or Broker creates a folder and supplies the initial required document: a policy for insurer-side work or a questionnaire for broker-side work.
2. The submitting user adds any relevant supporting documents and folder details.
3. The folder appears in dashboards and work lists according to its status.
4. An ACS Manager reviews the folder, its documents, papers, and speakers.
5. The ACS Manager can request missing items, record invalid-document reasons, validate documents, update supporting information, and change the site or workflow status.
6. The Insurer or Broker supplies missing or replacement documents when required.
7. The process continues until the folder reaches its final workflow state. The history records the actions taken along the way.

## Supporting Configuration

### Document types

Document types define the categories available when users upload or associate files with a folder. Administrators maintain their availability and status.

### Speakers

Speakers are reusable reference records maintained by Administrators. ACS Managers can associate and manage relevant speakers within a specific folder.

### Roles and permissions

The system currently defines these permissions:

- Role list, creation, and editing.
- User list, creation, editing, and status updates.
- Folder deletion.

The Administrator role receives these permissions by default. The folder-deletion setting can be switched per role from Role Management.

## Navigation Summary

| Role | Main navigation |
| --- | --- |
| Administrator | Dashboard, Role Management, User Management, Document Types, Speaker Management, Settings, My Account. |
| ACS Manager | To Process, Folders, My Account. |
| Insurer | Dashboard, Folders, My Account. |
| Broker | Dashboard, Folders, My Account. |

## Operational Notes

- Access requires an authenticated session.
- The visible dashboard and navigation are selected according to the user's assigned role.
- Folder access is also subject to document-access controls.
- The folder-deletion action is available only where the relevant role setting permits it.
- The application supports English and French user-interface translations; this document intentionally uses English only.
