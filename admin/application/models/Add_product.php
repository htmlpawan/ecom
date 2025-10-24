<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Add_product extends CI_Model {
	   public function __construct(){
		parent::__construct();
        $this->load->database();  
	} 

//------------------------------Add product Model -------------------------- 
	public function select_dashboard()
	{    
			 $sql = "select (select count(*) from `add_product`) as `product_total`, (select count(*) from `category`) as `category_total`;
			 ";
			 $query = $this->db->query($sql);
			 return $query->result_array();
	}

public function insert_product($data, $images)
{	    
		$run = $this->db->insert('add_product', $data);
		$insert_id = $this->db->insert_id();
		$alldata = array();
	    if($run){
			foreach($images as $value){
			$data = array(
				'product_id' => $insert_id,
				'image' => $value
			);
			array_push($alldata, $data);
		  }
		  if(count($alldata)>0)
		  $this->db->insert_batch('product_imgs', $alldata);

	     return true;	 
	    }
		else
		return false; 
}

public function update_product($data, $editid, $images)
{	    
		$this->db->where('id', $editid);
		$run =  $this->db->update('add_product', $data);
	    $alldata = array();
	    if($run){
			foreach($images as $value){
			$data = array(
				'product_id' => $editid,
				'image' => $value
			);
			array_push($alldata, $data);
		  }
		  if(count($alldata)>0)
		  $this->db->insert_batch('product_imgs', $alldata);
	    return true;	
		}
		else
		return false;  
}


//------------------------------product list Model --------------------------
	public function select_product()
	{      
		$query = $this->db->query("SELECT `add_product`.`id`, `add_product`.`title`, `product_imgs`.`image`, `category`.`title` as `category`,`add_product`.`price`, `add_product`.`quantity` FROM `add_product`, `category`, `product_imgs` WHERE `add_product`.`categoryId`=`category`.`id` and `add_product`.`id`=`product_imgs`.`product_id`");
			return $query->result_array();
	}
	public function select_photo($id){
	   $this->db->where('product_id', $id);
	  $query = $this->db->get('product_imgs');
	  return $query->result_array();
	}
	
	public function select_single($id){
	   $this->db->where('id', $id);
	  $query = $this->db->get('add_product');
	  return $query->result_array();
	  //$query = $this->db->get_where('mytable', array('id' => $id)
	}
	
	public function delete_product($id)
	{
        $this->db->where('id', $id);
        $run =  $this->db->delete('add_product');
		return $run;
	}
	
	public function delete_product_image($id)
	{
        $this->db->where('id', $id);
        $run =  $this->db->delete('product_imgs');
		return $run;
	}
	
	//------------------------------Add slider Model --------------------------
	
	function insert_slider($data){
	 $run = $this->db->insert('add_home_slider', $data);
	 return $run;
	}
	
	public function select_slider()
	{    
			$query = $this->db->get('add_home_slider');
			return $query->result_array();
	}
	
	function changeStatus($id, $status){
	        $this->db->where('id', $id);
			$this->db->set('status', $status);
			$run = $this->db->update('add_home_slider'); 
	      return $run;
	}
	
	public function delete_slider($id)
	{
        $this->db->where('id', $id);
        $run =  $this->db->delete('add_home_slider');
		return $run;
	}
	
	//------------------------------Add category Model --------------------------
	function insert_news($data){
	 $run = $this->db->insert('category', $data);
	 return $run;
	}

	//------------------------------News List Model --------------------------
	public function news_list()
	{    
			$query = $this->db->get('category');
			return $query->result_array();
	}
	
    public function select_single_news($id){
	   $this->db->where('id', $id);
	  $query = $this->db->get('category');
	  return $query->result_array();
	}
	
	public function update_news($data,$editid)
		{	    
		$this->db->where('id', $editid);
		$run =  $this->db->update('category', $data);
		return $run;
		}
		
	public function delete_news($id)
	{
        $this->db->where('id', $id);
        $run =  $this->db->delete('category');
		return $run;
	}
	
	//------------------------------Add blog Model --------------------------
	function insert_blog($data){
	 $run = $this->db->insert('add-blog', $data);
	 return $run;
	}
	
	//------------------------------blog List Model --------------------------
		public function blog_list()
		{    
				$query = $this->db->get('add-blog');
				return $query->result_array();
		}
		
		public function select_single_blog($id){
		   $this->db->where('id', $id);
		  $query = $this->db->get('add-blog');
		  return $query->result_array();
		}
	
		public function update_blog($data,$editid)
		{	    
		$this->db->where('id', $editid);
		$run =  $this->db->update('add-blog', $data);
		return $run;
		}
		
		public function delete_blog($id)
		{
			$this->db->where('id', $id);
			$run =  $this->db->delete('add-blog');
			return $run;
		}

        public function select_order(){
        // $cusId = $_SESSION['logid'];
		$query = $this->db->query("SELECT `order_item`.`order_id`, COUNT(*) as 'itemno', `transaction`.`cust_name`, `transaction`.`mobile`, `transaction`.`total`,`transaction`.`order_status`,`transaction`.`insert_time`  FROM `order_item`,`add_product`, `transaction`  WHERE `order_item`.pro_id = `add_product`.`id` and `transaction`.`order_id`=`order_item`.`order_id`  GROUp by `order_item`.`order_id` ORDER BY `transaction`.`t_id` DESC");
		$run = $query->result_array();
		if($run)
	    return $query->result_array();	
		else
		return false;
        }
}
?>