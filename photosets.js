let $ = id => document.getElementById(id)
let scale =  window.devicePixelRatio
let pp = el => el.parentElement.parentElement

//photoset code
//i swear this is less js than tumblr's impl.

var images = [], heights = []

//images, heights are arrays of photosets containing arrays of rows containing
//arrays of images

function centerRow(i, j) {
	//center each image vertically in its row
	images[i][j].forEach(i => i.parentElement.style.top =
		(i.height / pp(i).clientHeight - 1)
		* -50 + "%")
}

function resizeRow(i, j) {
	console.log("heights[" + i + "][" + j + "] = " + heights[i][j])
	console.log("images[i][j].length (>= 0) = " + images[i][j].length)

	if(heights[i][j].includes(NaN) === false && images[i][j].length > 0) {
		console.log("pp(tar) = " + pp(tar))
		pp(tar).style.height = Math.min.apply(null, heights[i][j]) + "px"
		centerRow(i, j)
	}
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
		resizeRow(i, j)
		centerRow(i, j)
	}
	console.log("--")
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
	console.log("--------------")
}

function updateLightbox(e) {
	e.preventDefault()
	$("lightbox-img").setAttribute("src", e.target.src)
	$("lightbox-img").style.marginTop =
		(window.innerHeight
			- Math.min(+e.target.attributes.nativeheight.value,
				   window.innerHeight * 0.9))
	$("lightbox-outer").style.display = "block"
	return false
}

function initPhotoset(layout, id) {
	var loadHandler = e => {
		tar = e.target
		i = tar.dataset.i
		j = tar.dataset.rownum
		//fill in heights
		heights[i][j][tar.dataset.slot] = tar.height
		resizeRow(i, j)
	}
	var row, container
	let i = images.length
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
			//images[i][j][k] = images[i][j][k].children[0]
			var img = images[i][j][k].children[0]
			//assign some attribs for future ref
			img.dataset.i = i
			img.dataset.rownum = j
			img.dataset.slot = k
			img.onload = loadHandler
			img.onclick = updateLightbox
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
