# Define the output file path
$outputFile = "CombinedContent.txt"

# Clear the content of the output file if it exists
if (Test-Path $outputFile) {
    Clear-Content $outputFile
}

# Function to process each file and append its content to the output file
function Process-Files($path) {
    Get-ChildItem -Path $path -Recurse | ForEach-Object {
        if (-not $_.PSIsContainer) {  # If it's not a directory
            $filePath = $_.FullName
            # Write the file path to the output file
            Add-Content -Path $outputFile -Value "File: $filePath"
            Add-Content -Path $outputFile -Value ""
            # Append the file content to the output file
            Get-Content -Path $filePath | Add-Content -Path $outputFile
            Add-Content -Path $outputFile -Value "`n" # Newline between file contents
        }
    }
}

# Run the function on the 'src' folder in the current directory
$srcFolder = Join-Path (Get-Location) "src"
Process-Files -path $srcFolder

Write-Host "Combined content from all files has been saved to $outputFile"