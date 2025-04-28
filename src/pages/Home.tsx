// COMPONENTS
import { CardComponent, CustomChart, CustomTable, Header, StyledH2, StyledH3, StyledSpan } from "@/components"
import AvatarsList from "@/components/AvatarsList"
import { Container, Grid } from "@mui/material"

// HOOKS
import { useGet } from "@/hooks"

// UTILS
import { currencyConverter, hightlightTextConverter } from "@/utils"

// TYPES
import { HighlightsData, NewsData, StarsData, CustomChartProps } from "@/types"

function Home() {
    const {
        data: highlightsData,
        loading: highlightsLoading,
        error: highlightsError,
    } = useGet<HighlightsData[]>('sales/highlights')

    const {
        data: salesMonthData,
        loading: salesMonthLoading,
        error: salesMonthError,
    } = useGet<CustomChartProps>('sales/month')

    const {
        data: salesStarsData,
        loading: salesStarsLoading,
        error: salesStarsError,
    } = useGet<StarsData[]>('sales/stars')

    const {
        data: newsData,
        loading: newsLoading,
        error: newsError,
    } = useGet<NewsData[]>('news')

    const {
        data: salesYearData,
        loading: salesYearLoading,
        error: salesYearError,
    } = useGet<CustomChartProps>('sales/year')

    return (
        <>
            <Header />
            <Container className='mb-2' maxWidth="lg">
                <Grid container spacing={4}>
                    {
                        !highlightsError && (
                            <>
                                <Grid component="div" sx={{ width: { xs: '100%', md: 'calc(33.33% - 24px)' } }}>
                                    <CardComponent className={highlightsLoading ? 'skeleton-loading skeleton-loading-mh-1' : ''}>
                                        {!highlightsLoading && highlightsData && (
                                            <>
                                                <StyledH2 className='mb-1'>Total de vendas no mês</StyledH2>
                                                <StyledH3 className='mb-1' size={40} lineheight={40}>
                                                    {currencyConverter(highlightsData[0].value)}
                                                </StyledH3>
                                                <StyledSpan>
                                                    {highlightsData[0].subtitle}
                                                </StyledSpan>
                                            </>
                                        )}
                                    </CardComponent>
                                </Grid>
                                <Grid component="div" sx={{ width: { xs: '100%', md: 'calc(33.33% - 24px)' } }}>
                                    <CardComponent className={
                                        highlightsData
                                        ? highlightsData[1].subtitle
                                        : 'skeleton-loading skeleton-loading-mh-1'
                                    }>
                                        {!highlightsLoading && highlightsData && (
                                            <>
                                                <StyledH2 className='mb-1' color="white">Meta do mês</StyledH2>
                                                <StyledH3 className='mb-1' color="white" size={40} lineheight={40}>
                                                    {currencyConverter(highlightsData[1].value)}
                                                </StyledH3>
                                                <StyledSpan color="white">
                                                    {hightlightTextConverter(highlightsData[1].subtitle)}
                                                </StyledSpan>
                                            </>
                                        )}
                                    </CardComponent>
                                </Grid>
                                <Grid component="div" sx={{ width: { xs: '100%', md: 'calc(33.33% - 24px)' } }}>
                                    <CardComponent className={highlightsLoading ? 'skeleton-loading skeleton-loading-mh-1' : ''}>
                                        {!highlightsLoading && highlightsData && (
                                            <>
                                                <StyledH2 className='mb-1'>Leads Contactados</StyledH2>
                                                <StyledH3 className='mb-1' size={40} lineheight={40}>
                                                    {(highlightsData[2].value)}
                                                </StyledH3>
                                                <StyledSpan>
                                                    {highlightsData[2].subtitle}
                                                </StyledSpan>
                                            </>
                                        )}
                                    </CardComponent>
                                </Grid>
                            </>
                        )
                    }
                    <Grid component="div" sx={{ width: { xs: '100%', md: '58.33%' } }}>
                        {
                            !salesMonthError && (
                                <CardComponent className={salesMonthLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''}>
                                    {
                                        !salesMonthLoading && salesMonthData && (
                                            <>
                                                <StyledH2 className='mb-1'>Valor de vendas no mês</StyledH2>
                                                <CustomChart 
                                                    labels={salesMonthData.labels.map((label: string) => label)}
                                                    data={salesMonthData.data.map((data: number) => data)}
                                                    type={salesMonthData.type} 
                                                />
                                            </>
                                        )
                                    }
                                </CardComponent>
                            )
                        }
                    </Grid>
                    <Grid component="div" sx={{ width: { xs: '100%', md: 'calc(41.66% - 32px)' } }}>
                        {
                            !salesStarsError && (
                                <CardComponent className={
                                    salesStarsLoading ? 
                                    'skeleton-loading skeleton-loading-mh-2'
                                    : ''
                                }>
                                    {
                                        !salesStarsLoading && salesStarsData && (
                                            <>
                                                <StyledH2 className='mb-1'>Maiores vendedores do mês</StyledH2>
                                                <AvatarsList 
                                                    listData={ salesStarsData?.map((star) => ({
                                                        avatar: '/dnc-avatar.svg',
                                                        name: star.name,
                                                        subtitle: currencyConverter(star.value)
                                                    }))
                                                }/>
                                            </>
                                        )
                                    }
                                </CardComponent>
                            )
                        }
                    </Grid>
                    <Grid component="div" sx={{ width: { xs: '100%', md: '41.66%' } }}>
                        {!newsError &&(
                                <CardComponent 
                                    className={
                                    newsLoading ? 
                                    'skeleton-loading skeleton-loading-mh-2'
                                    : ''
                                    }
                                >
                                    { !newsLoading && newsData && (
                                            <>
                                                <StyledH2 className='mb-1'>Notícias relevantes</StyledH2>
                                                <CustomTable 
                                                    headers={['Título', 'Horário']} 
                                                    rows={newsData.map((news) => [
                                                        <a className='ellipsis ellipsis-sm' href={news.link} target="_blank" >
                                                            {news.title}
                                                        </a>,
                                                        <a href={news.link} target="_blank" >
                                                            {news.date}
                                                        </a>,

                                                    ])} 
                                                />
                                            </>
                                        )}
                                </CardComponent>
                            )
                        }
                    </Grid>
                    <Grid component="div" sx={{ width: { xs: '100%', md: 'calc(58.33% - 32px)' } }}>
                        {
                            !salesYearError && (
                                <CardComponent className={salesYearLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''}>
                                    {
                                        !salesYearLoading && salesYearData && (
                                            <>
                                                <StyledH2 className='mb-1'>Valor de vendas por mês</StyledH2>
                                                <CustomChart 
                                                    labels={salesYearData.labels.map((label: string) => label)}
                                                    data={salesYearData.data.map((data: number) => data)}
                                                    type={salesYearData.type} 
                                                />
                                            </>
                                        )
                                    }
                                </CardComponent>
                            )
                        }
                    </Grid>
                </Grid>
            </Container>
        </>
    )
  }
  
  export default Home