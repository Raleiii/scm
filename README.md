# SCM Lab: Automated Static Site Delivery

A static HTML/CSS/JavaScript site demonstrating software configuration management through Git, ESLint, GitHub Actions, and GitHub Pages.

## Features

- Static responsive website
- ESLint quality check requiring semicolons and double quotes
- GitHub Actions workflow triggered by pushes to `main`
- Deployment job depends on a successful lint job
- GitHub Pages deployment using the official Pages Actions

## Setup and deployment

1. Create a **public** repository on GitHub named `scm-github-pages-demo` (or another name).
2. Upload the files in this project to the repository root, preserving `.github/workflows/deploy.yml`.
3. Commit and push the files to the `main` branch.
4. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
5. Open **Actions** and inspect the **Lint and Deploy to GitHub Pages** workflow. Once it succeeds, open **Settings → Pages** to find the published URL.

## Test the linter by breaking a rule

1. Open `script.js`.
2. Temporarily remove the semicolon at the end of this line:
   `statusTitle.textContent = "Page check passed";`
3. Commit and push the change.
4. Open **Actions → Lint and Deploy to GitHub Pages**. The **JavaScript lint** job should fail with a `semi` rule error. Because the deploy job has `needs: quality-check`, it must not run.
5. Restore the semicolon, commit, and push again. Confirm that lint passes and deployment succeeds.

Do not leave the intentional lint error in the final deployed version.

## LLM prompt log

Include the prompts you actually used when submitting the assignment. Example prompts for this project:

1. "Help me create a static website using HTML, CSS, and JavaScript for a Software Configuration Management assignment."
2. "Create a GitHub Actions workflow that runs ESLint before deploying the site to GitHub Pages."
3. "Configure ESLint to require semicolons and double quotes, and explain how to test the linter by intentionally removing a semicolon."
4. "Give me step-by-step instructions to publish this project in a public GitHub repository and enable GitHub Pages."
5. "Explain how to verify that a failed lint job prevents the deployment job from running."

Replace or supplement these with the full prompts from your actual LLM conversation history.

## Repository submission checklist

- [ ] Repository visibility is Public
- [ ] Workflow file exists at `.github/workflows/deploy.yml`
- [ ] Successful workflow run deploys the site
- [ ] Deliberately broken semicolon causes lint to fail
- [ ] Restoring the semicolon returns the workflow to success
- [ ] Repository URL and all LLM prompts are included in the submission
