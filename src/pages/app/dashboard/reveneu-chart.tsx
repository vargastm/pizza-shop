import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { date: '01/10', reveneu: 4000 },
  { date: '02/10', reveneu: 3000 },
  { date: '03/10', reveneu: 2000 },
  { date: '04/10', reveneu: 2780 },
  { date: '05/10', reveneu: 1890 },
  { date: '06/10', reveneu: 2390 },
  { date: '07/10', reveneu: 3490 },
]

export function ReveneuChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart style={{ fontSize: 12 }} data={data}>
            <YAxis
              stroke="#888"
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <XAxis dataKey="date" />
            <CartesianGrid vertical={true} className="stroke-muted" />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="reveneu"
              stroke={colors.violet['500']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
