function insert_Row() {
   const table= document.getElementById('sampleTable');

	const newRow= table.insertRow(0);

	const newCell0 = newRow.insertCell(0);
	const newCell1 = newRow.insertCell(1);

	newCell0.textContent = 'New Cell1';
	newCell1.textContent = 'New Cell2';
  
}
