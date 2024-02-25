export default function JobDataRow({date, deadline}: { date: string, deadline: string }) {
    return (
        <tr className="flex space-x-3 p-2 bg-white border-t">
            <td>
                <div>
                    受付年月日： {date}
                </div>
            </td>
            <td>
                <div>
                    紹介期限日： {deadline}
                </div>
            </td>
        </tr>
    );
}
