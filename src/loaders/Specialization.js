import axios from "axios";

export async function LoaderSpec({params}) {
    const specializationId = params.specializationId;
    let result = {
        'title': null,
        'passScore': null,
        'universitiesList': null,
        'passScoresByYears': null,
        'studentsByYears': null,
        'jobOffers': null
    }
    const passScore = (await axios.get('http://127.0.0.1:8080/statistic/specializations/pass-scores', {
        params: {
            specialization_id: specializationId,
            concurs_type: 'COMMON',
        }
    })).data

    const universitiesList = (await axios.get('http://127.0.0.1:8080/statistic/specializations/min-pass-scores-in-universities', {
        params: {
            specialization_id: specializationId,
            concurs_type: 'COMMON',
        }
    })).data

    const passScoresByYears = (await axios.get('http://127.0.0.1:8080/statistic/specializations/min-pass-scores-by-all-time', {
        params: {
            specialization_id: specializationId,
            concurs_type: 'COMMON',
        }
    })).data

    const studentsByYears = (await axios.get('http://127.0.0.1:8080/statistic/specializations/students-amount-by-all-time', {
        params: {
            specialization_id: specializationId,
            concurs_type: 'COMMON',
        }
    })).data

    let jobTitle = passScore.title.split('-')[1]
    const jobOffers = (await axios.get('http://127.0.0.1:8080/statistic/specializations/job-offers', {
        params: {
            specialization_title: jobTitle,
        }
    })).data

    result.title = passScore.title
    result.passScore = passScore
    result.universitiesList = universitiesList
    result.passScoresByYears = passScoresByYears
    result.studentsByYears = studentsByYears
    result.jobOffers = jobOffers

    return result
}
