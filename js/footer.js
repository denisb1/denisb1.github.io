function addFooter() {
	const footer = document.querySelector("#footer");
	footer.classList.add("mt-auto", "py-3", "bg-dark", "text-muted");

	const container = document.createElement("div");
	container.classList.add("container");

	const logo = document.createElement("img");
	logo.src = "img/ferit-logo.png";
	logo.alt = "FERIT logo";
	logo.style.marginBottom = "1rem";

	const copyright = document.createElement("div");
	copyright.classList.add("fw-bold");
	copyright.innerHTML = "&copy; 2022. - Denis Bošnjaković, Zvonimir Grizelj";

	const info = document.createElement("div");
	info.classList.add("mt-2");

	const feritLink = document.createElement("a");
	feritLink.classList.add("link-primary", "fst-italic");
	feritLink.href = "https://www.ferit.unios.hr";
	feritLink.target = "_blank";
	feritLink.innerHTML = "Fakulteta elektrotehnike, računarstva i informacijskih tehnologija Osijek";

	const mmtLink = document.createElement("a");
	mmtLink.classList.add("link-primary", "fst-italic");
	mmtLink.href = "https://moodle.srce.hr/2021-2022/course/view.php?id=101998";
	mmtLink.target = "_blank";
	mmtLink.innerHTML = "Multimedijska tehnika";

	info.innerHTML = "Web stranica izrađena za vrijeme pohađanja&nbsp;";
	info.appendChild(feritLink);
	info.innerHTML += "&nbsp;u sklopu kolegija&nbsp;";
	info.appendChild(mmtLink);

	container.appendChild(logo);
	container.appendChild(copyright);
	container.appendChild(info);
	footer.appendChild(container);
}
