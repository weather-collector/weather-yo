import {subDays} from 'date-fns'
import {Formik, FormikProps} from 'formik'
import {useRouter} from 'next/router'
import React, {useState} from 'react'
import * as Yup from 'yup'
import {useAppDispatch, useAppSelector} from '../../../hooks/redux'
import {generateReport} from '../../../store/reducers/ActionCreators/reportActions'
import {COLORS} from '../../../styles/theme'
import {convertDateToString} from '../../../utils/dateConverters'
import Button from '../../shared/Button'
import DatePickerField from '../../shared/Input/Datepicker'
import Input from '../../shared/Input'
import ConfirmationDialog from '../../shared/Modals/ConfirmationDialog'
import Typography from '../../shared/Typography'
import * as Styles from './styles'


interface GatherFormValues {
  locationName: string
  latitude: number
  longitude: number
  dateRange?: string
}

const GatherSchema = Yup.object().shape({
  locationName: Yup.string().required("*Обов'язкове поле"),
  latitude: Yup.number().min(-90, '-90 мінімільне').max(90, '90 максимальне').required("*Обов'язкове поле"),
  longitude: Yup.number().min(-180, '-180 мінімальне').max(180, '180 максимальне').required("*Обов'язкове поле"),
  dateRange: Yup.string().required("*Обов'язкове поле"),
})

const RequestWeatherForm = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const {locationName, latitude, longitude} = useAppSelector(state => state.mapFormReducer)

  const [modalCounter, setModalCounter] = useState<number>(0)
  const [reportId, setReportId] = useState<string>('')
  const [modalMessage, setModalMessage] = useState({
    title: 'Ваш звіт було успішно сформовано',
    description: 'Перейдіть до нього просто зараз!',
  })

  const initialValues: GatherFormValues = {
    locationName: locationName,
    latitude: latitude,
    longitude: longitude,
    dateRange: `${convertDateToString(subDays(new Date(), 14))} - ${convertDateToString(subDays(new Date(), 5))}`,
  }

  const sendRequestHandler = (values: GatherFormValues) => {
    const responsePromise = dispatch(generateReport({...values}))
    responsePromise.then(data => {
      if (data) {
        setModalCounter(prev => prev + 1)
        setModalMessage({...modalMessage, title: data.message})
        setReportId(data.reportId)
      }
    })
  }

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={GatherSchema}
        onSubmit={(values: GatherFormValues) => sendRequestHandler(values)}
      >
        {(formik: FormikProps<GatherFormValues>) => {
          return (
            <Styles.RequestWeatherForm>
              <Styles.PlaceWrapper>
                <Input
                  label={'Населений пункт'}
                  name={'locationName'}
                  type={'text'}
                  error={!!formik.errors.locationName}
                  caption={formik.errors.locationName}
                  width={'220px'}
                />

                <Input
                  label={'Широта'}
                  name={'latitude'}
                  type={'number'}
                  error={!!formik.errors.latitude}
                  caption={formik.errors.latitude}
                  width={'120px'}
                />

                <Input
                  label={'Довгота'}
                  name={'longitude'}
                  type={'number'}
                  error={!!formik.errors.longitude}
                  caption={formik.errors.longitude}
                  width={'120px'}
                />
              </Styles.PlaceWrapper>

              <DatePickerField
                label={'Проміжок часу'}
                name={'dateRange'}
                type={'text'}
                error={!!formik.errors.dateRange}
                caption={formik.errors.dateRange}
                width={'220px'}
                defaultValue={'hello'}
              />

              <Button
                type={'submit'}
                width={'128px'}
              >
                <Typography textSize={'14px'} textColor={COLORS.whiteText}>Отримати дані</Typography>
              </Button>
            </Styles.RequestWeatherForm>
          )
        }}
      </Formik>

      <ConfirmationDialog
        counter={modalCounter}
        title={modalMessage.title}
        description={modalMessage.description}
        onConfirmationCallback={() => router.push(`/reports/${reportId}`)}
      />
    </>
  )
}

export default RequestWeatherForm
