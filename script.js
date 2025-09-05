const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const priceElements = document.querySelectorAll(".price");

  let total = 0;
  priceElements.forEach((priceEl) => {
    total += parseFloat(priceEl.textContent);
  });

  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  totalCell.setAttribute("colspan", "2");
  totalCell.style.fontWeight = "bold";
  totalCell.style.textAlign = "center";
  totalCell.textContent = `Total Price: Rs ${total}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);

  getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);

