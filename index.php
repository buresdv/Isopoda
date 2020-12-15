<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Isopoda</title>

    <link rel="stylesheet" type="text/css" href="common.css">
    <link rel="stylesheet" type="text/css" href="test.css">
</head>
<body>
    <nav>
        <button id="openMenu" onclick="openMenu()">Otevřít menu</button>
    </nav>
    <canvas id="playground"></canvas>
    <aside class="flex column centered">
        <button id="closeMenu" onclick="closeMenu()">x</button>
        <h1>Isopod Status</h1>
        <isopodStatus>

        </isopodStatus>
    </aside>
</body>
<script src="globals.js"></script>
<script src="helperFunctions.js"></script>

<script src="canvasInitializer.js"></script>
<script src="mouseHandler.js"></script>

<script src="common.js"></script>
<script src="renderer.js"></script>
<script src="interaction.js"></script>
</html>
