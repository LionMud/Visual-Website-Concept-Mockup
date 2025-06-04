# PowerShell script to extract all text and images from your PDF for Pizza Mafia project
# Requires Poppler for Windows (https://github.com/oschwartz10612/poppler-windows/releases/)
# Make sure Poppler's bin folder is in your PATH

# Set this to your actual Poppler bin path
$popplerPath = "C:\Users\Noah\Downloads\Release-24.08.0-0\poppler-24.08.0\Library\bin"
$popplerBin = Join-Path $popplerPath "pdftotext.exe"
$popplerImg = Join-Path $popplerPath "pdfimages.exe"
$pdfFile = "Pizza Mafia Curaçao – Deep Research Report.pdf"
$textOut = "src/content/research-report.txt"
$imgOutPrefix = "public/images/pizzamafia_img"

# Extract all text
Write-Host "Extracting text from PDF..."
& $popplerBin $pdfFile $textOut

# Extract all images as PNG
Write-Host "Extracting images from PDF..."
& $popplerImg -png $pdfFile $imgOutPrefix

Write-Host "Extraction complete!"
Write-Host "Text: $textOut"
Write-Host "Images: $imgOutPrefix-*.png"
