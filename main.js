/* Set the width of the side navigation px and the left margin of the page content px */
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

const copyables = document.getElementsByClassName("copyable")

for(var i = 0; i < copyables.length; i++) {
  const copyableItem = copyables[i]

  tippy(copyableItem, {
    trigger: 'click',
    content: 'Copied!',
    onShow(instance) {
      setTimeout(() => {
        instance.hide();
      }, 1000)
    }
  })

  copyableItem.addEventListener('click', () => {
    copy(copyableItem)
  })
}

function copy(element) {
  element.select()
  document.execCommand("copy")
  window.getSelection().removeAllRanges()
}


