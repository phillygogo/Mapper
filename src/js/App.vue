<template>
<div class="container">
    <!-- <div style="clear: both; width: 500px; height: 50px; border: 1px solid black;" id="selections"></div> -->
    <img id="NzMap" src="https://i.imgur.com/lsf1Fzc.png" usemap="#Map">
    <map name="Map" id="Map">
			<area shape="poly" coords="42,454,124,454,132,461,129,456,133,453,136,457,141,460,136,464,141,465,142,469,136,469,136,471,129,472,127,474,123,473,131,464,126,461,125,466,42,466" href="#" alt="Stewart Island" name="Stewart Island">
			<area shape="poly" coords="250,10,265,29,263,38,274,50,258,50,257,44,198,44,198,58,258,58,258,53,273,51,287,71,291,64,298,71,309,70,299,58,306,57,302,51,304,46,297,35,291,35,286,29,277,28,271,23,266,23,256,6" href="#" name="Northland">
			<area shape="poly" coords="297,72,297,80,292,78,301,97,279,94,279,88,224,88,224,103,278,103,280,97,299,98,309,109,316,112,324,110,326,104,320,92,313,92,306,85,308,77,310,69" href="#" alt="Auckland" name="Auckland">
			<area shape="poly" coords="419,87,419,74,348,74,347,78,332,85,327,77,322,79,326,104,332,112,337,106,339,109,338,102,337,92,333,87,347,81,347,87" href="#" alt="Coromandel" name="Coromandel">
			<area shape="poly" coords="456,166,456,152,407,152,407,159,349,149,340,139,325,150,329,153,343,155,348,150,407,161,408,166" href="#" alt="Rotorua" name="Rotorua">
			<area shape="poly" coords="241,140,278,140,280,147,318,154,325,151,329,154,343,155,334,165,318,165,316,155,279,150,280,155,241,155" href="#" alt="Taupo" name="Taupo">
			<area shape="poly" coords="228,118,276,118,276,123,308,126,309,111,318,113,327,106,337,122,338,140,325,150,309,159,302,157,303,136,308,128,276,126,276,133,228,133" href="#" alt="Waikato" name="Waikato">
			<area shape="poly" coords="444,112,444,100,369,100,368,105,354,125,347,120,338,107,333,112,341,139,350,148,370,147,385,136,403,119,398,115,395,119,373,133,374,132,355,126,369,108,368,112" href="#" alt="Bay of Plenty" name="Bay of Plenty">
			<area shape="poly" coords="373,148,402,119,408,123,399,139,424,131,427,125,478,125,478,140,426,140,425,135,400,140,400,149,391,157,374,151" href="#" alt="Eastland" name="Eastland">
			<area shape="poly" coords="209,159,258,159,261,165,279,166,287,159,296,159,301,156,309,161,309,168,296,185,280,175,280,168,260,168,258,174,209,174" href="#" alt="Taranaki" name="Taranaki">
			<area shape="poly" coords="451,185,451,171,396,171,396,177,332,169,334,166,330,165,317,166,322,172,329,175,332,170,396,179,396,185" href="#" alt="Ruapehu" name="Ruapehu">
			<area shape="poly" coords="220,181,280,181,282,190,297,187,297,184,310,168,307,159,316,157,319,168,331,176,315,194,301,188,281,193,281,196,220,196" href="#" alt="Whanganui" name="Whanganui">
			<area shape="poly" coords="456,203,382,203,382,198,363,190,351,206,337,200,336,189,334,183,330,179,331,170,338,162,346,152,356,149,372,148,376,153,385,159,390,162,390,172,387,174,381,170,381,164,372,164,363,174,363,189,382,195,382,188,456,188" href="#" alt="Hawkes Bay" name="Hawkes Bay">
			<area shape="poly" coords="249,199,309,199,309,204,314,204,317,192,330,179,335,188,336,203,319,230,308,225,316,211,315,206,309,206,309,212,249,212" href="#" alt="Manawatu" name="Manawatu">
			<area shape="poly" coords="423,234,423,219,361,219,360,226,340,222,350,210,350,206,342,204,338,199,336,208,320,231,333,236,339,228,341,224,360,228,362,234" href="#" alt="Wairarapa" name="Wairarapa">
			<area shape="poly" coords="406,242,345,242,344,246,330,242,333,238,308,225,298,235,305,242,312,241,318,246,328,244,343,249,346,258,406,258" href="#" alt="Wellington" name="Wellington">
			<area shape="poly" coords="174,211,220,211,220,217,237,225,245,217,259,218,255,216,248,218,252,230,257,229,259,248,265,249,269,241,284,235,239,287,240,272,234,237,237,227,219,219,219,226,174,226" href="#" alt="Nelson" name="Nelson">
			<area shape="poly" coords="379,277,379,261,304,261,304,267,289,265,286,251,293,239,292,239,289,233,277,246,246,282,255,291,259,292,274,276,285,273,286,267,304,269,304,277" href="#" alt="Marlborough" name="Marlborough">
			<area shape="poly" coords="300,301,300,294,272,293,268,297,266,299,255,297,256,293,260,292,277,274,285,274,274,291,301,291,301,284,353,284,353,301" href="#" alt="Kaikoura" name="Kaikoura">
			<area shape="poly" coords="121,345,120,352,164,365,174,355,186,364,171,377,160,370,163,366,131,358,120,355,120,361,73,361,73,345" href="#" alt="Wanaka" name="Wanaka">
			<area shape="poly" coords="343,352,343,339,270,339,270,344,260,343,259,335,251,331,250,328,243,333,238,343,249,345,256,347,259,345,270,347,271,352" href="#" alt="Christchurch" name="Christchurch">
			<area shape="poly" coords="188,342,175,355,188,365,211,382,212,373,228,376,228,381,301,381,301,369,228,369,227,374,212,371,212,364" href="#" alt="Mt Cook and MacKenzie Ccountry" name="Mt Cook and MacKenzie Ccountry">
			<area shape="poly" coords="121,283,188,283,188,290,211,298,211,286,215,283,217,264,224,262,231,259,231,254,231,242,234,240,237,257,240,288,185,343,164,362,144,354,148,348,157,348,180,326,185,318,186,313,192,313,209,300,190,294,186,299,121,299" href="#" alt="West Coast" name="West Coast">
			<area shape="poly" coords="283,312,349,312,349,328,283,328,283,323,255,316,250,326,240,335,238,343,212,362,188,341,229,301,246,282,250,286,255,292,253,299,263,300,263,302,264,301,264,309,258,315,283,320" href="#" alt="Canterbury" name="Canterbury">
			<area shape="poly" coords="108,365,108,370,154,376,160,369,170,381,161,391,148,382,153,378,108,374,108,382,36,382,36,365" href="#" alt="Queenstown" name="Queenstown">
			<area shape="poly" coords="271,404,271,390,217,390,216,395,185,383,186,376,179,371,170,377,171,382,166,386,172,389,181,389,185,385,216,398,216,404" href="#" alt="Cromwell" name="Cromwell">
			<area shape="poly" coords="34,396,90,396,91,402,106,400,112,391,122,385,117,384,125,376,128,370,126,367,127,365,136,361,140,359,143,354,166,364,162,365,157,372,147,381,129,419,126,434,123,438,120,440,105,441,98,428,104,402,91,404,90,413,34,413" href="#" alt="Fiordland" name="Fiordland">
			<area shape="poly" coords="216,464,176,464,158,453,162,452,156,441,157,422,161,415,161,392,148,383,128,421,126,437,132,446,139,443,142,449,145,450,152,449,166,464,154,464,154,479,216,478" href="#" alt="Southland" name="Southland">
			<area shape="poly" coords="232,453,232,437,194,437,194,444,180,438,189,426,181,423,188,404,204,397,211,381,201,376,186,365,181,371,187,375,188,380,183,390,171,391,165,386,162,391,162,416,158,422,157,439,163,452,174,447,179,439,193,447,194,453" href="#" alt="Otago" name="Otago">
			<area shape="poly" coords="262,427,262,414,212,414,212,419,202,419,202,400,189,406,183,422,190,426,199,420,212,422,212,427" href="#" alt="Dunedin" name="Dunedin">
			<area shape="poly" coords="461,353,452,355,454,349,462,347,466,360,467,349,475,348,466,358,471,363,474,369,476,372,473,377,471,384,479,384,479,410,425,410,425,384,470,384,471,376,473,370,467,362,459,366" href="#" alt="Chatham Islands" name="Chatham Islands">
    </map>

    <img id="Northland" class="regionName" src="https://i.imgur.com/dD8Ow3s.png">
    <img id="Auckland" class="regionName" src="https://i.imgur.com/vfZ4Lyi.png">
    <img id="Waikato" class="regionName" src="https://i.imgur.com/RM4aShu.png">
    <img id="Taupo" class="regionName" src="https://i.imgur.com/hA0Rq8b.png">
    <img id="Taranaki" class="regionName" src="https://i.imgur.com/2uKh4Pv.png">
    <img id="Whanganui" class="regionName" src="https://i.imgur.com/HC0eqpz.png">
		<img id="Manawatu" class="regionName" src="https://i.imgur.com/nqGFLnx.png">
		<img id="Wellington" class="regionName" src="https://i.imgur.com/cWMxwtP.png">
		<img id="Wairarapa" class="regionName" src="https://i.imgur.com/Fc4CFfr.png">
		<img id="Hawkes Bay" class="regionName" src="https://i.imgur.com/Wh9D7yk.png">
		<img id="Ruapehu" class="regionName" src="https://i.imgur.com/Y1M1ojD.png">
		<img id="Rotorua" class="regionName" src="https://i.imgur.com/zi3DGyv.png">
		<img id="Eastland" class="regionName" src="https://i.imgur.com/r5yYEDi.png">
		<img id="Bay of Plenty" class="regionName" src="https://i.imgur.com/tW4Hu5f.png">
		<img id="Coromandel" class="regionName" src="https://i.imgur.com/ersuNKb.png">

		<div class="game-hub">
			<div id="correct" class="correct">
				Correct!
			</div>
			<div id="try-again" class="try-again">
				Try again!
			</div>
			<div class="question">
				{{question}}
			</div>
			<div class="attempts">
				{{attempts}}
			</div>
			<div class="score">
				{{"Score: " + score}}
			</div>
			<div class="question-number">
				{{question_number}}
			</div>
			<div id="next-question" class="next-question" @click="nextQuestion">
				NEXT!~>
			</div>
		</div>
</div>
</template>

<script>
	export default {
		name: "App",
		data() {
			return {
				locations: [
					"Northland", "Auckland", "Waikato", "Taupo", "Taranaki", "Whanganui",
					"Manawatu", "Wellington", "Wairarapa", "Hawkes Bay","Ruapehu", "Rotorua",
					"Eastland", "Bay of Plenty", "Coromandel"],
				pickedLoc: "Northland",
				score: 0,
				questionNumber: 0,
				scorePotential: 3,
			}
		},
		computed: {
			question() {
				// console.log(this.pickedLoc);
				return `Where in the world is ${this.pickedLoc}?`
			},
			attempts() {
				return `Chances: ${this.scorePotential}/3`
			},
			question_number() {
				return `Questions: ${this.questionNumber}/10`
			}
		},
		methods: {
			nextQuestion() {
				this.scorePotential = 3;
				this.questionNumber++;

				//pick next location
				this.locations = this.locations.filter(item => item !== this.pickedLoc)
				this.pickedLoc = this.locations[Math.floor(Math.random() * this.locations.length)];

				//allow clickable map again
				document.querySelector(".container :first-child").style.zIndex = 89;

				document.getElementById("correct").classList.remove("showOff");
				document.getElementById("try-again").classList.remove("showOff");
				document.getElementById("next-question").classList.remove("showOff");
			}
		},
		mounted() {
		this.$nextTick(function () {

			let $vm = this;
			var image = $('#NzMap');

			// allowClickable

			image.mapster({
				fillOpacity: 0.4,
				fillColor: "ffffff",
				stroke: true,
				strokeColor: "3320FF",
				strokeOpacity: 0.7,
				strokeWidth: 2,
				singleSelect: true,
				mapKey: 'name',
				listKey: 'name',
				onClick: function(e) {
					document.getElementById(e.key).classList.add("showOff");

					if(e.key == $vm.pickedLoc) {
						$vm.score += $vm.scorePotential;

						//makes map unclickable until next is clicked:
						document.querySelector(".container :first-child").style.zIndex = -1;

						//shows and hides game state elements.
						document.getElementById("correct").classList.add("showOff");
						document.getElementById("next-question").classList.add("showOff");
						document.getElementById("try-again").classList.remove("showOff");
					} else {
						document.getElementById("try-again").classList.add("showOff");
						document.getElementById(e.key).classList.remove("showOff");
						$vm.scorePotential--;

						if($vm.scorePotential == 0) {
							console.log('in here?');
							document.querySelector(".container :first-child").style.zIndex = -1;
							document.getElementById("next-question").classList.add("showOff");
						}

					}
				},
				showToolTip: true,
				toolTipClose: ["tooltip-click", "area-click"],
				/*  areas: [{
					key: "Northland",
					fillColor: "ffffff"
					},
					{
					key: "yellowpepper",
					fillColor: "000000"
					},
					{
					key: "carrots",
					fillColor: "000000"
					},
					{
					key: "asparagus",
					strokeColor: "FFFFFF"
					}
				] */
			});


		})
		}
	}
</script>

<style scoped lang="scss">

	.container {
		display: flex;
	}

	.container :first-child {
		border: grey 1px solid;
		border-radius: 7px;
	}

	// .allowClickable {
	// 	z-index: 89;
	// }

	// .block {
	// 	.container :first-child {
	// 		z-index: 89;
	// 		border: grey 1px solid;
	// 		border-radius: 7px;
	// 	}
	// }

	.map#Map {
		display: none;
	}

	.regionName {
		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 2;
		display:none;
	}

	.correct {
		display: none;
	}

	.try-again {
		display: none;
	}

	.next-question {
		display:none;
	}

	.showOff {
		display: block;
	}

	.next-question {
		cursor: pointer;
	}

</style>
