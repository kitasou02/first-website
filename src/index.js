document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp': {
      const button = document.getElementById('zero'); // DOM を取得する命令

      button.style.top = `${Number(button.style.top.split('px')[0]) - 10}px`;

      break;
    }
45
    case 'ArrowDown': {
      const button = document.getElementById('zero'); // DOM を取得する命令

      button.style.top = `${Number(button.style.top.split('px')[0]) + 10}px`;

      break;
    }

    case 'ArrowRight': {
      const button = document.getElementById('zero'); // DOM を取得する命令

      button.style.left = `${Number(button.style.left.split('px')[0]) + 10}px`;

      break;
    }

    case 'ArrowLeft': {
      const button = document.getElementById('zero'); // DOM を取得する命令

      button.style.left = `${Number(button.style.left.split('px')[0]) - 10}px`;

      break;
    }
  }
});
