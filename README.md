> [!CAUTION]
> **This utility modifies files in place.**
> - Always create a backup before running
> - Review the code to understand what it does
> - Use at your own risk

# Recursive Discord Class Updater
Updates Discord classes across multiple files in modular theme codebases. Unlike single-file update utilities, this recursively processes all files in a theme's root directory.

Designed for themes with modular source structures like [Nox](https://github.com/zerebos/Nox).

## Usage
1. Set `THEME_ROOT_DIRECTORY` to your theme's root folder
2. Set `CHANGE_LIST` to the local path of your class mapping file
   - Example mapping file: https://github.com/SyndiShanX/Update-Classes/blob/main/Changes.txt
4. Run with: `node RDCU.js`

## Change list format
The file should contain pairs of lines as follows:
```
OldClass
NewClass
AnotherOldClass
AnotherNewClass
```
