# Legacy URL Removal Tracker

Use this folder to coordinate Search Console removal requests after pruning pages.

- `legacy-removal-template.csv` – working sheet to log each prefix or individual URL, the tool you used, and follow-up status. Duplicate the file per cleanup cycle or append rows as you submit new requests.
- Attach supporting evidence (curl output, screenshots) in this folder if you need an audit trail for compliance.

Workflow summary:

1. Confirm the URL now returns `404`, `410`, or redirects to an approved destination.
2. Log the candidate + verification notes in the CSV.
3. Submit the removal request (Search Console Removals or the public Outdated Content tool).
4. Update the `status` column when the request is accepted or needs re-submission.
