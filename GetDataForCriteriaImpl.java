package com.amazon.ftc.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.amazon.ftc.db.DBConnectionEngine;
import com.amazon.ftc.model.CriteriaData;

public class GetDataForCriteriaImpl implements GetDataForCriteriaDAO{
	
	Connection con;
	PreparedStatement pst;
	ResultSet rs = null;
	
	
	public ArrayList<CriteriaData> getCriteriaDataObj(String hiredFromDate, String hiredToDate, String contractFromDate, String contractToDate, String pipStatus, String capStatus, String empLogin, String sites, String ous){
		
		ArrayList<CriteriaData> criteriaData = new ArrayList<CriteriaData>();
		
		System.out.println(hiredFromDate);
		System.out.println(contractFromDate);
		try (Connection con = DBConnectionEngine.getConnection();) {
			
//			String sql = "call ftc.getCriteriaDashboardData('2019-08-01', '2019-09-25', null, null, '','NA,UK', 'PNQ10', '', '');";
//			
	      String sql = "call ftc.getCriteriaDashboardData("+hiredFromDate+", "+hiredToDate+","+contractFromDate+", "+contractToDate+", null,'"+ous+"','"+sites+"','"+capStatus+"','"+pipStatus+"');";
 
			 
		//	String sql = "call ftc.getCriteriaDashboardData()";
			
			System.out.println(sql);
			pst = con.prepareStatement(sql);
			rs = pst.executeQuery();
			
			while(rs.next()) {
				
				CriteriaData criteriaObj = new CriteriaData();
				
				criteriaObj.setEmployeeId(rs.getString("id"));
				criteriaObj.setEmployeeUserId(rs.getString("employee_user_id"));
				criteriaObj.setEmployeeEmail(rs.getString("employee_user_id"));
				criteriaObj.setEmployeeFullName(rs.getString("full_name"));
				criteriaObj.setEmployeeBusinessTitle(rs.getString("employee_business_title"));
				criteriaObj.setEmployeeCostCenter(rs.getString("employee_cost_center"));
				criteriaObj.setEmployeeJobLevel(rs.getString("employee_job_level"));
				criteriaObj.setEmployeeLocationSite(rs.getString("employee_location_site"));
				criteriaObj.setEmployeeDeptName(rs.getString("department_name"));
				criteriaObj.setEmployeeManagerUserID(rs.getString("manager_login"));
				criteriaObj.setRehireDate(rs.getString("employee_rehire_date"));
				criteriaObj.setContractEndDate(rs.getString("employee_contract_end_date"));
				criteriaObj.setHiringOU(rs.getString("employee_hiring_ou"));
				criteriaObj.setCurCSkillStatus(rs.getString("employee_current_cross_skill_status"));
				criteriaObj.setEmployementType(rs.getString("employment_type"));
				criteriaObj.setEmployeeCurrentPipStatus(rs.getString("employee_current_pip_status"));
				criteriaObj.setEmployeeCurrentCapStatus(rs.getString("employee_current_cap_status"));
				criteriaObj.setEmployeeOverallShrinkageGoal(rs.getString("shrinkage_goal"));
				criteriaObj.setOverallShrinkageAchieved(rs.getString("shrinkage_achieved"));
				criteriaObj.setOverallShrinkageVariance(rs.getString("shrinkage_variance"));
				criteriaObj.setOverallRapGoal(rs.getString("rap_goal"));
				criteriaObj.setOverallRapAchieved(rs.getString("rap_achieved"));
				criteriaObj.setOverallRapVariance(rs.getString("rap_variance"));
				criteriaObj.setOverallChtGoal(rs.getString("cht_goal"));
				criteriaObj.setOverallChtAchieved(rs.getString("cht_acheived"));
				criteriaObj.setOverallChtVariance(rs.getString("cht_variance"));
				criteriaObj.setTotalScore(rs.getString("total_score"));
				
				/* Added by pkkodal */
				criteriaObj.setCurrent_forecast_group(rs.getString("employee_current_forecast_group"));
				criteriaObj.setEmployeeEmail(rs.getString("employee_email"));
				criteriaObj.setOriginal_hire_date(rs.getString("employee_original_hire_date"));
				criteriaObj.setHiring_work_group(rs.getString("employee_hiring_workgroup")); 
				criteriaObj.setCurrent_forecast_group(rs.getString("employee_current_forecast_group"));
				criteriaObj.setHiring_forecast_group(rs.getString("employee_hiring_forecast_group"));
				criteriaObj.setCool_off_period_cap_status(rs.getString("employee_cool_off_period_cap_status"));
				criteriaObj.setCool_off_period_pip_status(rs.getString("employee_cool_off_period_pip_status"));
				criteriaObj.setCurrent_cap_status(rs.getString("employee_current_cap_status"));
				criteriaObj.setCurrent_pip_status(rs.getString("employee_current_pip_status"));
				criteriaObj.setPrimaryChtgoal(rs.getString("primary_cht_goal"));
				criteriaObj.setPrimaryRapGoal(rs.getString("primary_rap_goal"));
				criteriaObj.setPrimaryRapVariance(rs.getString("primary_rap_variance"));
				criteriaObj.setCross_skillChtgoal(rs.getString("cross_skill_cht_goal"));
				criteriaObj.setCross_skillRapGoal(rs.getString("cross_skill_rap_goal"));
				criteriaObj.setCross_skillRapVariance(rs.getString("cross_skill_rap_variance")); 
				criteriaObj.setGrpm_login(rs.getString("grpm_login"));
				criteriaObj.setOps_login(rs.getString("ops_login"));
				criteriaObj.setHrbp(rs.getString("hrbp_login"));
				criteriaObj.setSite_stack_rank(rs.getString("site_stack_rank"));
				criteriaObj.setOu_stack_rank(rs.getString("ou_stack_rank")); 
				
				System.out.println("The employee status is "+rs.getString("emp_status"));
				criteriaObj.setStatusRecommendations(rs.getString("emp_status") == null ? "-": rs.getString("emp_status"));
				criteriaData.add(criteriaObj);
				
			}
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return criteriaData;
	}

}
