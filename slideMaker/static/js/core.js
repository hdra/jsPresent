var slideNo = 1;

function addSlide(currentSlide)
{
	slideNo++;
	var newSec = "<div class=\"slideContent\" id=\"slide"+slideNo+"\"> \
							 <textarea id=\"rte"+slideNo+"\" class=\"rtZone\" name=\"slide\"> </textarea> \
							 <input type=\"button\" onclick=\"addSlide('#slide"+slideNo+"')\" value=\"Add Slide\"/> \
							 <input type=\"button\" onclick=\"removeSlide('#slide"+slideNo+"')\" value=\"Delete Slide\"/> \
						 </div>";
	$(currentSlide).after(newSec);
	initRte('#rte'+slideNo);
}

function removeSlide(slideToRemove)
{
	$(slideToRemove).remove();
}
