<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Size Checker</title>
</head>
<body>
    <h1>Upload a file to check its size</h1>
    <input type="file" id="fileInput" onchange="showFileSize()">
    <p id="fileSizeDisplay"></p>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script>
        function showFileSize() {
            const fileInput = document.getElementById('fileInput');
            const fileSizeDisplay = document.getElementById('fileSizeDisplay');

            if (fileInput.files.length > 0) {
                const fileSize = fileInput.files[0].size;
                fileSizeDisplay.textContent = `File size: ${fileSize} bytes`;
            } else {
                fileSizeDisplay.textContent = '';
            }
        }
    </script>
	<?php include 'contactform.php'?>
    <?php include 'index_email.php'?>
	</body>
</html>

</body>
</html>

