function doSomething() {
  const expandsMore = document.querySelectorAll('[expand-more]');

  function expand() {
    const showContent = document.getElementById(this.dataset.target);
    if (showContent.classList.contains('expand-active')) {
      this.innerHTML = this.dataset.showtext;
    } else {
      this.innerHTML = this.dataset.hidetext;
    }
    showContent.classList.toggle('expand-active');
  }

  expandsMore.forEach((expandMore) => {
    expandMore.addEventListener('click', expand);
  });

  // select the item element
  const item = document.querySelector('.frog');

  // handle the dragstart
  function dragStart(e) {
    const frogDiv = e.target.parentElement;
    console.log('drag starts...');
    console.log(e);
    console.log(frogDiv);
    e.dataTransfer.setData('text/plain', frogDiv.id);
    setTimeout(() => {
      frogDiv.classList.add('hide');
    }, 0);
  }

  // attach the dragstart event handler
  item.addEventListener('dragstart', dragStart);

  const boxes = document.querySelectorAll('.drag-slot');

  function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
  }

  function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
  }

  function dragLeave(e) {
    e.target.classList.remove('drag-over');
  }

  function drop(e) {
    e.target.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    console.log(id);
    const draggable = document.getElementById(id);

    console.log(draggable);
    console.log(e.target);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
  }

  boxes.forEach((box) => {
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
  });
}

document.addEventListener('DOMContentLoaded', doSomething);
