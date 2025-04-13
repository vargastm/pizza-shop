import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MonthCanceledOrdersAmount } from './month-canceled-orders-amount'
import { MonthOrdersAmountCard } from './month-orders-amount-card'
import { MonthReveneuCard } from './month-reveneu-card'
import { PopularProductsChart } from './popular-products-chart'
import { ReveneuChart } from './reveneu-chart'

export function Dashboard() {
  return (
    <div>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold -tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthReveneuCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmount />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <ReveneuChart />
          <PopularProductsChart />
        </div>
      </div>
    </div>
  )
}
