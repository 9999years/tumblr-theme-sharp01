[CmdletBinding(DefaultParametersetname="Build")]
Param(
	$Sass="sass",
	[Parameter(ParameterSetName="Watch")]
	[Switch]$Watch,
	[Parameter(ParameterSetName="Build")]
	[Switch]$Build
)

$sassStyle = If($PSCmdlet.ParameterSetName -eq "Server") {
	"watch"
} Else {
	"update"
}

# keep this in sync with post-merge.sh
$sassArgs = ("--unix-newlines", "--sourcemap=none", "-E", "UTF-8", "--$sassStyle", "main.sass:main.css")

Switch($PSCmdlet.ParameterSetName) {
	"Build" {
		& $Sass $sassArgs
	}
	"Watch" {
		"Starting $Sass $sassArgs" | Write-Verbose
		Start-Process $Sass $sassArgs -WindowStyle Minimized
	}
}
