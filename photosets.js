let $ = id => document.getElementById(id)

//photoset code
//i swear this is less js than tumblr's impl.

var images = [], heights = []

//images, heights are arrays of photosets containing arrays of rows containing
//arrays of images

function centerRow(i, j) {
	//center each image vertically in its row
	images[i][j].foreach(i => i.parentElement.style.top =
		(i.height / i.parentElement.parentElement.clientHeight - 1)
		* -50 + "%")
}

function updatePhotoset(i) {
	for(var j = 0; j < images[i].length; j++) {
		for(var k = 0; k < images[i][j].length; k++) {
			//update heights
			heights[i][j][k] = images[i][j][k].height
			if(isNaN(heights[i][j][k]) || (heights[i][j][k] === 0)) {
				//skip rows with unloaded images
				break
			}
		}
		if((heights[i][j].includes(NaN) === false) && images[i][j].length >= 0) {
			//if every image is loaded, resize the row
			images[i][j][0].parentElement.parentElement.style.height =
				Math.min.apply(null, heights[i][j])
		}
		centerRow(i, j)
	}
}

function updatePhotosets() {
	for(var i = 0; i < images.length; i++) {
		updatePhotoset(i)
	}
	let rows = document.getElementsByClassName("photoset-row")
	//equiv. of a 10px margin for 700px
	let margin = $("contents").clientWidth / 70
	for(var i = 0; i < rows.length; i++) {
		rows[i].style.marginBottom = margin + "px"
	}
}

function updateLightbox(e) {
	e.preventDefault()
	$("lightbox-img").setAttribute("src", e.target.src)
	$("lightbox-img").style.marginTop =
		(window.innerHeight
			- Math.min(+e.target.attributes.nativeheight.value,
				   window.innerHeight * 0.9)) / 2
	$("lightbox-outer").style.display = "block"
	return false
}

function initPhotoset(layout, id) {
	var loadHandler = e => {
		//fill in heights
		heights[i][e.target.rownum][e.target.slot] = e.target.height
		//resize j if all in j loaded
		if(heights[i][e.target.rownum].includes(NaN) === false) {
			e.target.parentElement.parentElement.style.height =
				Math.min.apply(null, heights[i][e.target.rownum]) + "px"
			centerRow(i, e.target.rownum)
		}
	}
	var row, container, i = images.length
	//create new keys for this photoset
	images[i]  = []
	heights[i] = []
	container = $("photoset-" + id)
	//turn layout into numbers
	layout = layout.map(k => { return +k; })
	for(var j = 0; j < layout.length; j++) {
		//create row element, tag it properly
		row = document.createElement("div")
		container.append(row)
		row.className = "photoset-row row-" + layout[j]
		images[i].push([])
		heights[i].push([])
		//k is number of images put in the new row
		//n is the number of elements inspected
		for(var k = 0, n = 0; k < layout[j];) {
			if(container.children[n].nodeName !== "A") {
				n++
				continue
			}
			heights[i][j].push(NaN)
			images[i][j].push(row.appendChild(container.children[n]))
			images[i][j][k] = images[i][j][k].children[0]
			//assign some attribs for future ref
			images[i][j][k].rownum = j
			images[i][j][k].slot = k
			images[i][j][k].onload = loadHandler
			images[i][j][k].onclick = updateLightbox
			//element is popped, reset n and increment k
			n = 0
			k++
		}
	}
}

window.onresize = updatePhotosets

window.onload = () => {
    $("lightbox-outer").onclick = e => {
        e.target.style.display = "none"
    }
}
