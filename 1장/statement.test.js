import { statement, htmlStatement } from "./statement";
import invoices from "./invoices.json" with { type: "json" };
import plays from "./plays.json" with { type: "json" };

test("statement func 테스트", () => {
  expect(statement(invoices[0], plays)).toBe(
    "청구 내역 (고객명 BigCo)\n" +
      " Hamlet: $650.00 (55석)\n" +
      " As You Like It: $530.00 (35석)\n" +
      " Othello: $580.00 (48석)\n" +
      "총액 $1,760.00\n" +
      "적립 포인트 : 55점\n"
  );
});

test("htmlStatement func 테스트", () => {
  const expectedHTML = `<h1>청구 내역 (고객명: BigCo)</h1>
<table>
<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr> <tr><td>Hamlet</td><td>(55석)</td><td>$650.00</td></tr>
 <tr><td>As You Like It</td><td>(35석)</td><td>$530.00</td></tr>
 <tr><td>Othello</td><td>(48석)</td><td>$580.00</td></tr>
</table>
<p>총액 : <em>$1,760.00</em></p>
<p>적립 포인트: <em>55</em>점</p>
`;

  expect(htmlStatement(invoices[0], plays)).toBe(expectedHTML);
});
