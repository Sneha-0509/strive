// json2html.js
export default function json2html(data) {
    // Collect all unique headers from the data objects
    const headers = Array.from(
      data.reduce((set, row) => {
        Object.keys(row).forEach(key => set.add(key));
        return set;
      }, new Set())
    );
  
    // Start building the HTML table
    let html = `<table data-user="sneha.sathineni0509@gmail.com">\n<thead>\n<tr>`;
  
    // Add table headers
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += `</tr>\n</thead>\n<tbody>`;
  
    // Add table rows
    data.forEach(row => {
      html += `<tr>`;
      headers.forEach(header => {
        html += `<td>${row[header] !== undefined ? row[header] : ""}</td>`;
      });
      html += `</tr>\n`;
    });
  
    html += `</tbody>\n</table>`;
    return html;
  }
  