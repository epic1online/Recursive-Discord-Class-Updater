> [!CAUTION]
> **This utility modifies files in place.**
> - Always create a backup before running
> - Review the code to understand what it does
> - Use at your own risk

# Recursive Discord Class Updater
Updates Discord classes across multiple files in modular theme codebases. Unlike single-file update utilities, this recursively processes all files in a theme's root directory.

Designed for themes with modular source structures like [Nox](https://github.com/zerebos/Nox).

## Usage
`node RDCU.js <MAPPING_FILE PATH> <THEME_ROOT_FOLDER PATH>`
- Example mapping file: https://github.com/SyndiShanX/Update-Classes/blob/main/Changes.txt

## Class mapping file format
The file should contain pairs of lines as follows:
```
OldClass
NewClass
AnotherOldClass
AnotherNewClass
```
