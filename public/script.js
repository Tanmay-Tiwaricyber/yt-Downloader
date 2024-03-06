function fetchDownloadOptions() {
  const url = document.getElementById('videoUrl').value;
  fetch(`/download?url=${url}`)
      .then(response => response.json())
      .then(formats => {
          const downloadOptions = document.getElementById('downloadOptions');
          downloadOptions.innerHTML = '';
          formats.forEach(format => {
              const button = document.createElement('a');
              button.setAttribute('href', format.url);
              button.setAttribute('download', '');
              button.textContent = format.qualityLabel || format.quality;
              downloadOptions.appendChild(button);
          });
      })
      .catch(error => {
          console.error('Error:', error);
          alert('Failed to fetch download options');
      });
}// Listen for Enter key press event




function toggleInfoBlock() {
    var infoBlock = document.getElementById('infoBlock');
    infoBlock.classList.toggle('show');
}


function toggleInfoBlock() {
  var infoBlock = document.getElementById('infoBlock');
  infoBlock.classList.toggle('show');
}

document.getElementById('videoUrl').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
      fetchDownloadOptions();
  }
});
